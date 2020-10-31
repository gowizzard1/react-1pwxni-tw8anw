import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import { SampleBase } from "./sample-base";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import { PropertyPane } from "./property-pane";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

import * as dataSource from "./dataSource/icons-data.json";
export class Icons extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = dataSource;
    this.imageUrl = "image";
    this.iconCss = "icon";
    this.fields = {
      dataSource: this.data.iconData,
      id: "nodeId",
      text: "nodeText",
      child: "nodeChild",
      iconCss: this.iconCss,
      imageUrl: this.imageUrl
    };
    //  this.treeObj.autoCheck = true;
    // this.showCheckBox = false;
    // this.allowDragAndDrop = false;
    // this.allowEditing = false;
    // this.allowMultiSelection = false;
    // this.collapseAll = false;
    // this.autoCheck = false;
  }
  onChangeCollapseAll(args) {
    this.treeObj.collapseAll = args.checked;
  }
  onChangeAutoCheck(args) {
    this.treeObj.autoCheck = args.checked;
  }
  onChangeShowCheck(args) {
    this.treeObj.showCheckBox = args.checked;
  }
  onChangeShowIcon(args) {
    if (!args.checked) {
      this.iconCss = "";
    } else {
      this.iconCss = "icon";
    }
    alert(this.iconCss);
  }
  onChangeShowImage(args) {
    if (!args.checked) {
      this.treeObj.imageUrl = "";
    }
  }
  onChangeAllowDragAndDrop(args) {
    this.treeObj.allowDragAndDrop = args.checked;
  }
  onChangeallowEditing(args) {
    this.treeObj.allowEditing = args.checked;
  }
  onChangeAllowMultiSelection(args) {
    this.treeObj.allowMultiSelection = args.checked;
  }
  render() {
    return (
      <div className="control-pane">
        <div className="col-lg-8 control-section">
          <div className="tree-control_wrapper">
            <TreeViewComponent
              collapseAll={this.collapseAll}
              allowMultiSelection={this.allowMultiSelection}
              allowEditing={this.allowEditing}
              allowDragAndDrop={this.allowDragAndDrop}
              showCheckBox={this.showCheckBox}
              allowEditing={this.allowEditing}
              fields={this.fields}
              ref={scope => {
                this.treeObj = scope;
              }}
            />
          </div>
        </div>
        <div className="col-lg-4 property-section">
          <PropertyPane title="Properties">
            <table id="property" title="Properties">
              <tbody>
                <tr>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="check"
                        checked={true}
                        label="Auto Check"
                        change={this.onChangeAutoCheck.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="s_check"
                        checked={true}
                        label="Show Check"
                        change={this.onChangeShowCheck.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="icon"
                        checked={true}
                        label="Show Icon"
                        change={this.onChangeShowIcon.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="drag"
                        checked={true}
                        label="Allow Drag"
                        change={this.onChangeAllowDragAndDrop.bind(this)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="allow_edit"
                        checked={true}
                        label="Allow Edit"
                        change={this.onChangeallowEditing.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="allow_ms"
                        checked={true}
                        label="Multi-Selection"
                        change={this.onChangeAllowMultiSelection.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="collapse_all"
                        checked={true}
                        label="Collapse All"
                        change={this.onChangeCollapseAll.bind(this)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent
                        id="show_image"
                        checked={true}
                        label="Show Image"
                        change={this.onChangeShowImage.bind(this)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div>
      </div>
    );
  }
}

render(<Icons />, document.getElementById("sample"));
