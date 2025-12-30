declare module 'surfgram' {
  interface Bot {
    fsm: {
      get<T = any>(userId: number): { state: string; data: T; timestamp: number } | null;
      set<T = any>(userId: number, state: string, data?: T): void;
      clear(userId: number): void;
      transition(userId: number, from: string, to: string, data?: any): boolean;
      is(userId: number, stateName: string): boolean;
      stats(): { totalUsers: number };
    };
  }
}

export class SurfgramFSM {
  public name = 'surfgram-fsm';
  public version = '1.0.0';

  private states = new Map<string, { state: string; data: any; timestamp: number }>();

  install(bot: any): void {
    const api = {
      get: <T = any>(userId: number) => {
        const key = userId.toString();
        const state = this.states.get(key);
        return state
          ? {
              state: state.state,
              data: state.data as T,
              timestamp: state.timestamp,
            }
          : null;
      },

      set: <T = any>(userId: number, state: string, data?: T) => {
        const key = userId.toString();
        this.states.set(key, {
          state,
          data: data ?? {},
          timestamp: Date.now(),
        });
      },

      clear: (userId: number) => {
        this.states.delete(userId.toString());
      },

      transition: (userId: number, from: string, to: string, data?: any) => {
        const current = api.get(userId);
        if (!current || current.state !== from) return false;

        api.set(userId, to, data ?? current.data);
        return true;
      },

      is: (userId: number, stateName: string) => {
        const current = api.get(userId);
        return current?.state === stateName;
      },

      stats: () => ({
        totalUsers: this.states.size,
      }),
    };

    bot.fsm = api;
  }

  cleanup(): void {
    this.states.clear();
  }
}

export default SurfgramFSM;
