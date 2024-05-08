import type { UpdateBy } from "./UpdatedBy";

export class BasicUpdate{

  updateBy:   UpdateBy;
  update:     string;

  constructor(updateBy: UpdateBy, update: string) {
    this.updateBy = updateBy;
    this.update = update;    
  }

}