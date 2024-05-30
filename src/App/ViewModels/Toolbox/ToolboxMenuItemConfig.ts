import { BasicUpdate } from "../../../Core/Infra/Common/Messaging/BasicUpdate";
import type { UpdateOrigin } from "../../../Core/Infra/Common/Messaging/UpdatedBy";
import type { ToolboxType } from "../../../Core/Infra/Common/Messaging/ToolboxType";

export class ToolboxMenuItemConfig extends BasicUpdate{
  iconName: string;
  isSelected: boolean = false;

  constructor(updateBy: UpdateOrigin, requester: ToolboxType, iconName: string) {
    super(updateBy, requester);
    this.iconName = iconName;    
  }

}