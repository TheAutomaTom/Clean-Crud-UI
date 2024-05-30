import type { ToolboxType } from "./ToolboxType";
import type { UpdateOrigin } from "./UpdatedBy";

export class BasicUpdate{

  origin:    UpdateOrigin;
  requester: ToolboxType;

  constructor(origin: UpdateOrigin, requester: ToolboxType) {
    this.origin = origin;
    this.requester = requester;    
  }

}