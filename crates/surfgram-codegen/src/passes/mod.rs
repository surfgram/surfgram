mod bindings;
mod boxing;
mod defaults;
mod empty_params;
mod files;
mod owners;
mod request_types;
mod triggers;
mod untagged;
mod validate;

use crate::ir::Ir;

pub trait Pass {
    fn run(&self, ir: &mut Ir) -> Result<(), String>;
}

pub fn default_passes() -> Vec<Box<dyn Pass>> {
    vec![
        Box::new(empty_params::MaterializeEmptyParams),
        Box::new(untagged::PatchUntagged),
        Box::new(files::AttachableFields),
        Box::new(boxing::ApplyBoxing),
        Box::new(defaults::DeriveDefaults),
        Box::new(request_types::FindRequestTypes),
        Box::new(owners::AssignMethodOwners),
        Box::new(bindings::BindOwnerParams),
        Box::new(triggers::DeriveTriggers),
        Box::new(validate::Validate),
    ]
}

pub fn run_all(ir: &mut Ir) -> Result<(), String> {
    for pass in default_passes() {
        pass.run(ir)?;
    }
    Ok(())
}
