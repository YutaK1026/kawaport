declare module "mo-js" {
  export class Timeline {
    add(...args: any[]): Timeline;
    replay(): Timeline;
    play(): Timeline;
  }

  export class Burst {
    constructor(options: any);
    play(): void;
  }
}
