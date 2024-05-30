import { BasicUpdate } from "../../../Core/Infra/Common/Messaging/BasicUpdate";
import type { UpdateOrigin } from "../../../Core/Infra/Common/Messaging/UpdatedBy";
import type { UpdateRequester } from "../../../Core/Infra/Common/Messaging/UpdateRequester";

export class ToolboxMenuItemConfig extends BasicUpdate{
  iconName: string;

  constructor(updateBy: UpdateOrigin, requester: UpdateRequester, iconName: string) {
    super(updateBy, requester);
    this.iconName = iconName;    
  }

}