import { BasicUpdate } from "../Models/BasicUpdate";
import type { UpdateOrigin } from "../Models/UpdatedBy";
import type { UpdateRequester } from "../Models/UpdateRequester";

export class ToolboxMenuItemConfig extends BasicUpdate{
  iconName: string;

  constructor(updateBy: UpdateOrigin, requester: UpdateRequester, iconName: string) {
    super(updateBy, requester);
    this.iconName = iconName;    
  }

}