import { BasicUpdate } from "./BasicUpdate";
import type { UpdateBy } from "./UpdatedBy";

export class ToolboxMenuItemConfig extends BasicUpdate{
  iconName: string;

  constructor(updateBy: UpdateBy, update: string, iconName: string) {
    super(updateBy, update);
    this.iconName = iconName;    
  }

}