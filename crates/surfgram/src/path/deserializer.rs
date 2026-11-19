use serde::de::{
    value::Error as ValueError, DeserializeOwned, DeserializeSeed, Deserializer,
    Error as DeError, MapAccess, SeqAccess, Visitor,
};

pub(crate) fn deserialize_captures<T: DeserializeOwned>(
    captures: &[(String, String)],
) -> Result<T, ValueError> {
    T::deserialize(CapturesDeserializer { captures })
}

struct CapturesDeserializer<'a> {
    captures: &'a [(String, String)],
}

impl<'de, 'a> Deserializer<'de> for CapturesDeserializer<'a> {
    type Error = ValueError;

    fn deserialize_any<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Self::Error> {
        visitor.visit_map(CapturesMapAccess {
            iter: self.captures.iter(),
            current: None,
        })
    }

    fn deserialize_seq<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Self::Error> {
        visitor.visit_seq(CapturesSeqAccess {
            iter: self.captures.iter(),
        })
    }

    fn deserialize_tuple<V: Visitor<'de>>(
        self,
        _len: usize,
        visitor: V,
    ) -> Result<V::Value, Self::Error> {
        self.deserialize_seq(visitor)
    }

    fn deserialize_tuple_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        _len: usize,
        visitor: V,
    ) -> Result<V::Value, Self::Error> {
        self.deserialize_seq(visitor)
    }

    fn deserialize_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        _fields: &'static [&'static str],
        visitor: V,
    ) -> Result<V::Value, Self::Error> {
        self.deserialize_any(visitor)
    }

    fn deserialize_map<V: Visitor<'de>>(
        self,
        visitor: V,
    ) -> Result<V::Value, Self::Error> {
        self.deserialize_any(visitor)
    }

    serde::forward_to_deserialize_any! {
        bool i8 i16 i32 i64 u8 u16 u32 u64 f32 f64 char str string
        bytes byte_buf option unit unit_struct newtype_struct enum identifier ignored_any
    }
}

struct CapturesMapAccess<'a> {
    iter: std::slice::Iter<'a, (String, String)>,
    current: Option<&'a str>,
}

impl<'de, 'a> MapAccess<'de> for CapturesMapAccess<'a> {
    type Error = ValueError;

    fn next_key_seed<K: DeserializeSeed<'de>>(
        &mut self,
        seed: K,
    ) -> Result<Option<K::Value>, Self::Error> {
        let Some((key, value)) = self.iter.next() else {
            return Ok(None);
        };
        self.current = Some(value.as_str());
        seed.deserialize(StrNumberDeserializer(key.as_str())).map(Some)
    }

    fn next_value_seed<V: DeserializeSeed<'de>>(
        &mut self,
        seed: V,
    ) -> Result<V::Value, Self::Error> {
        let value = self
            .current
            .take()
            .expect("MapAccess: next_value_seed called before next_key_seed");
        seed.deserialize(StrNumberDeserializer(value))
    }
}

struct CapturesSeqAccess<'a> {
    iter: std::slice::Iter<'a, (String, String)>,
}

impl<'de, 'a> SeqAccess<'de> for CapturesSeqAccess<'a> {
    type Error = ValueError;

    fn next_element_seed<T: DeserializeSeed<'de>>(
        &mut self,
        seed: T,
    ) -> Result<Option<T::Value>, Self::Error> {
        let Some((_, value)) = self.iter.next() else {
            return Ok(None);
        };
        seed.deserialize(StrNumberDeserializer(value.as_str())).map(Some)
    }
}

struct StrNumberDeserializer<'a>(&'a str);

macro_rules! parse_num {
    ($name:ident, $ty:ty, $visit:ident) => {
        fn $name<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
            let n: $ty = self.0.parse().map_err(DeError::custom)?;
            visitor.$visit(n)
        }
    };
}

impl<'de, 'a> Deserializer<'de> for StrNumberDeserializer<'a> {
    type Error = ValueError;

    fn deserialize_any<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
        visitor.visit_str(self.0)
    }

    parse_num!(deserialize_i8, i8, visit_i8);
    parse_num!(deserialize_i16, i16, visit_i16);
    parse_num!(deserialize_i32, i32, visit_i32);
    parse_num!(deserialize_i64, i64, visit_i64);
    parse_num!(deserialize_u8, u8, visit_u8);
    parse_num!(deserialize_u16, u16, visit_u16);
    parse_num!(deserialize_u32, u32, visit_u32);
    parse_num!(deserialize_u64, u64, visit_u64);
    parse_num!(deserialize_f32, f32, visit_f32);
    parse_num!(deserialize_f64, f64, visit_f64);

    fn deserialize_bool<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
        let b = match self.0 {
            "true" | "1" => true,
            "false" | "0" => false,
            other => return Err(DeError::custom(format!("invalid bool: {other}"))),
        };
        visitor.visit_bool(b)
    }

    fn deserialize_str<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
        visitor.visit_str(self.0)
    }

    fn deserialize_string<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
        visitor.visit_string(self.0.to_owned())
    }

    fn deserialize_option<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, ValueError> {
        visitor.visit_some(self)
    }

    serde::forward_to_deserialize_any! {
        char bytes byte_buf unit unit_struct newtype_struct
        seq tuple tuple_struct map struct enum identifier ignored_any
    }
}