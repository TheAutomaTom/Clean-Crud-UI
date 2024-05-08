import type { UpdateRequester } from "./UpdateRequester";
import type { UpdateOrigin } from "./UpdatedBy";

export class BasicUpdate{

  origin:    UpdateOrigin;
  requester: UpdateRequester;

  constructor(origin: UpdateOrigin, requester: UpdateRequester) {
    this.origin = origin;
    this.requester = requester;    
  }

}