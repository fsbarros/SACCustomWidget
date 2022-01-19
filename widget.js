(function () {
	let tmpl = document.createElement('template');
	tmpl.innerHTML =
		`
        <script ui5xml type="sapui5/xmlview">
        	<mvc:View height="100vh"
				xmlns="sap.ui.table" xmlns:mvc="sap.ui.core.mvc"
				xmlns:core="sap.ui.core" xmlns:m="sap.m" xmlns:gnt2="sap.gantt.simple" 
				xmlns:axistime="sap.gantt.axistime"
				xmlns:config="sap.gantt.config"
				xmlns:gnt="sap.gantt"
				xmlns:html="http://www.w3.org/1999/xhtml">
				
				<m:HBox justifyContent="Center">
					<m:Panel id="idLegendPanel" expanded="true" expandable="true" backgroundDesign="Solid" width="20rem" class="legendPanel sapUiSmallMarginEnd" >
					<m:headerToolbar>
						<m:OverflowToolbar>
							<m:Title text="Legend"/>
						</m:OverflowToolbar>
					</m:headerToolbar>
					<m:VBox class="sapUiSmallMarginBottom">
						<m:Label text="Milestones" design="Bold"/>
						<m:HBox >
							<html:div class="milestoneColor coloredBox"></html:div>
							<m:Text text="MS1"/>
						</m:HBox>
						<m:HBox >
							<html:div class="milestoneColor coloredBox"></html:div>
							<m:Text text="MS2"/>
						</m:HBox>
						<m:HBox >
							<html:div class="milestoneColor coloredBox"></html:div>
							<m:Text text="MS3"/>
						</m:HBox>
					</m:VBox>
					<m:VBox>
						<m:Label text="Parts Periods" design="Bold"/>
						<m:HBox>
							<m:VBox class="sapUiSmallMarginEnd">
								<m:HBox >
									<html:div class="blue1Color coloredBox"></html:div>
									<m:Text text="Anfrageunterlagen"/>
								</m:HBox>
								<m:HBox >
									<html:div class="blue2Color coloredBox"></html:div>
									<m:Text text="CSC Vergabe"/>
								</m:HBox>
								<m:HBox >
									<html:div class="blue3Color coloredBox"></html:div>
									<m:Text text="P-Freigabe"/>
								</m:HBox>
								<m:HBox >
									<html:div class="blue4Color coloredBox"></html:div>
									<m:Text text="Konstruktion"/>
								</m:HBox>
								<m:HBox >
									<html:div class="blue5Color coloredBox"></html:div>
									<m:Text text="B-freigabe"/>
								</m:HBox>
								<m:HBox >
									<html:div class="coloredBox redColor"></html:div>
									<m:Text text="Prototypen Laminate"/>
								</m:HBox>
							</m:VBox>
							<m:VBox>
								<m:HBox >
									<html:div class="coloredBox orangeColor"></html:div>
									<m:Text text="KSW o.Note"/>
								</m:HBox>
								<m:HBox >
									<html:div class="coloredBox yellowColor"></html:div>
									<m:Text text="KSW Note 3"/>
								</m:HBox>
								<m:HBox >
									<html:div class="coloredBox green1Color"></html:div>
									<m:Text text="SWZ Optimlerung"/>
								</m:HBox>
								<m:HBox >
									<html:div class="coloredBox green2Color"></html:div>
									<m:Text text="SWZ Note 3"/>
								</m:HBox>
								<m:HBox >
									<html:div class="coloredBox green3Color"></html:div>
									<m:Text text="SWZ Note 1"/>
								</m:HBox>
							</m:VBox>
						</m:HBox>
					</m:VBox>
				</m:Panel>
					<m:Panel id="idDataPanel"><m:Text text="No Data to display"></m:Text></m:Panel>
				</m:HBox>
				<gnt2:GanttChartContainer id="GanttChartContainer" enableTimeScrollSync="true">
					<gnt2:toolbar>
						<gnt2:ContainerToolbar id="idContainerToolbar" showTimeZoomControl="true" showBirdEyeButton="false" showDisplayTypeButton="true"
							showSettingButton="false"/>
					</gnt2:toolbar>
					<gnt2:GanttChartWithTable id="Truck" ghostAlignment="Start" adhocLineLayer="Bottom" shapeSelectionMode="Single"
						shapeSelectionSettings="{color:'black', strokeDasharray:'1,0'}" selectionPanelSize="535px">
						<gnt2:table>
							<Table selectionMode="Single" visibleRowCountMode="Auto" minAutoRowCount="1" selectionBehavior="RowSelector" enableColumnReordering="true"
								fixedColumnCount="1">
								<columns>
									<Column id="seColumn" label="SE" width="50px">
										<template>
											<m:Label text="{se}"/>
										</template>
									</Column>
									<Column id="teilebezeichnungColumn" label="Teilebezeichnung" width="150px">
										<template>
											<m:Label text="{teilebezeichnung}"/>
										</template>
									</Column>
									<Column id="lieferantColumn" label="Lieferant" width="120px">
										<template>
											<m:Label text="{lieferant}"/>
										</template>
									</Column>
									<Column id="hRelevColumn" label="H-relev" width="70px">
										<template>
											<m:Label text="{hRelev}"/>
										</template>
									</Column>
									<Column id="hFahigColumn" label="H-fahig" width="70px">
										<template>
											<m:Label text="{hFahig}"/>
										</template>
									</Column>
									<Column id="akzColumn" label="AKZ" width="50px">
										<template>
											<m:Label text="{akz}"/>
										</template>
									</Column>
								</columns>
							</Table>
						</gnt2:table>
					</gnt2:GanttChartWithTable>
				</gnt2:GanttChartContainer>
				
			</mvc:View>
        </script>
        <style>
			.coloredBox{
				width: 1rem;
			    height: 1rem;
			    margin-right: 0.5rem;
			}
			.milestoneColor{
				background-color: #3f6491;
			}
			.legendPanel{
				
			}
			.blue1Color{
				background-color: #0FAAFF;
			}
			.blue2Color{
				background-color: #0076CB;
			}
			.blue3Color{
				background-color: #0F46A7;
			}
			.blue4Color{
				background-color: #008FD3;
			}
			.blue5Color{
				background-color: #003283;
			}
			.redColor{
				background-color: #D04512;
			}
			.orangeColor{
				background-color: #EB7300;
			}
			.yellowColor{
				background-color: #4FB81C;
			}
			.green1Color{
				background-color: #BCDC50;
			}
			.green2Color{
				background-color: #4FB81C;
			}
			.green3Color{
				background-color: #247230;
			}
		</style>
        <div class="ui5-chart-anchor"></div>
    `;

	customElements.define('com-demo-basic-ui5-chart', class UI5Chart extends HTMLElement {
		constructor() {
			super();
			debugger;
			this.appendChild(tmpl.content.cloneNode(true));
			this.$div = this.querySelector('div.ui5-chart-anchor');
			
			window.$ChartControllerFactory = sap.ui.core.mvc.Controller.extend("ChartController", {
				onInit: function () {
					window.$UI5WidgetController = this;
					this.initLocalVars();
					this.initDataModel();
					this.setBindings();
				},
				initLocalVars: function() {
					var oView = this.getView();
					this.oGanttChartContainer = oView.byId("GanttChartContainer");
					this.oGanttChartWithTable = oView.byId("Truck");
					this._oModel = {};
				},
				initDataModel: function() {
					this._oModel = new sap.ui.model.json.JSONModel({
						"root": [{
							"id": "01",
							"se": "K12 ",
							"teilebezeichnung": "Beispielbauteil 1",
							"lieferant": "Fa. Muller",
							"hRelev": "N",
							"hFahig": "-",
							"akz": "0",
							"task": [{
								"startTime": "20181107000000",
								"endTime": "20190221000000",
								"status": "konstruktion"
							}, {
								"startTime": "20181114000000",
								"endTime": "20181121000000",
								"text": "P",
								"status": "p_freigabe"
							}, {
								"startTime": "2019012100000",
								"endTime": "20190130000000",
								"text": "LOI",
								"status": "csc_vergabe"
							}, {
								"startTime": "2019013000000",
								"endTime": "20190207000000",
								"text": "CSC",
								"status": "csc_vergabe"
							}, {
								"startTime": "2019021400000",
								"endTime": "20190221000000",
								"text": "B",
								"status": "b_freigabe"
							}, {
								"startTime": "2019022100000",
								"endTime": "20191014000000",
								"status": "prototypen_laminate"
							}, {
								"startTime": "2019101400000",
								"endTime": "20200131000000",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "2020010700000",
								"endTime": "2020011400000",
								"text": "BMG",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "2020013100000",
								"endTime": "2020032100000",
								"text": "N3",
								"status": "SWZ_note3"
							}, {
								"startTime": "2020032100000",
								"endTime": "2020090700000",
								"text": "N1",
								"status": "SWZ_note1"
							}]
						}, {
							"id": "02",
							"se": "K04 ",
							"teilebezeichnung": "Beispielbauteil 2",
							"lieferant": "Fa. Huber",
							"hRelev": "N",
							"hFahig": "-",
							"akz": "0",
							"task": [{
								"startTime": "20181107000000",
								"endTime": "20190314000000",
								"status": "konstruktion"
							}, {
								"startTime": "20181114000000",
								"endTime": "20181121000000",
								"text": "HSWZ",
								"status": "konstruktion"
							}, {
								"startTime": "20181121000000",
								"endTime": "20181130000000",
								"text": "1.Teile",
								"status": "konstruktion"
							}, {
								"startTime": "20181214000000",
								"endTime": "20181221000000",
								"text": "P",
								"status": "p_freigabe"
							}, {
								"startTime": "20190314000000",
								"endTime": "20190321000000",
								"text": "B",
								"status": "b_freigabe"
							}, {
								"startTime": "20190321000000",
								"endTime": "20190621000000",
								"status": "prototypen_laminate"
							}, {
								"startTime": "20190621000000",
								"endTime": "20190814000000",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190622000000",
								"endTime": "20190630000000",
								"text": "1.Teile",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190707000000",
								"endTime": "20190714000000",
								"text": "EM N3",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190801000000",
								"endTime": "20190808000000",
								"text": "BMG",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190814000000",
								"endTime": "20191001000000",
								"text": "N3",
								"status": "SWZ_note3"
							}, {
								"startTime": "20191001000000",
								"endTime": "20200420000000",
								"text": "N1",
								"status": "SWZ_note1"
							}]
						}, {
							"id": "03",
							"se": "A06 ",
							"teilebezeichnung": "Beispielbauteil 3",
							"lieferant": "Fa. Schneider",
							"hRelev": "N",
							"hFahig": "-",
							"akz": "0",
							"task": [{
								"startTime": "20181107000000",
								"endTime": "20181115000000",
								"status": "konstruktion"
							}, {
								"startTime": "20181115000000",
								"endTime": "20181122000000",
								"text": "B",
								"status": "b_freigabe"
							}, {
								"startTime": "20181122000000",
								"endTime": "20190307000000",
								"status": "prototypen_laminate"
							}, {
								"startTime": "20190307000000",
								"endTime": "20190814000000",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190801000000",
								"endTime": "20190808000000",
								"text": "BMG",
								"status": "SWZ_optimlerung"
							}, {
								"startTime": "20190814000000",
								"endTime": "20191001000000",
								"text": "N3",
								"status": "SWZ_note3"
							}, {
								"startTime": "20191001000000",
								"endTime": "20200420000000",
								"text": "N1",
								"status": "SWZ_note1"
							}]
						}],
						"milestones": [{
							"date": "2019032000000",
							"Text": "MS1"
						}, {
							"date": "2019042900000",
							"Text": "MS2"
						}, {
							"date": "2019062300000",
							"Text": "MS3"
						}, {
							"date": "2019081800000",
							"Text": "MS4"
						}]
					});
					this.getView().setModel(this._oModel);
				},
				setBindings: function () {
					var oTable = this.oGanttChartWithTable.getTable();
					// Table Rows
					oTable.bindRows({
						path: "/root",
						parameters: {
							arrayNames: ['children']
						}
					});
					// Parts time events (allocation rectangles)
					oTable.setAggregation("rowSettingsTemplate", new sap.gantt.simple.GanttRowSettings({
						rowId: "{id}",
						shapes1: {
							path: "task",
							templateShareable: false,
							template: new sap.gantt.simple.BaseRectangle({
								time: {
									path: 'startTime',
									formatter: this.fnTimeConverter.bind(this)
								},
								endTime: {
									path: 'endTime',
									formatter: this.fnTimeConverter.bind(this)
								},
								countInBirdEye: true,
								height: "25",
								showTitle: true,
								title: "{text}",
								fill: {
									path: 'status',
									formatter: this.rectangleColor.bind(this)
								}
							})
						}
					}));
					//Milestones
					this.oGanttChartWithTable.bindSimpleAdhocLines({
						path: "/milestones",
						template: new sap.gantt.simple.AdhocLine({
							stroke: "#3f6491",
							strokeDasharray: "5, 2",
							timeStamp: "{date}",
							markerType: "Diamond",
							markerMouseEnter: this.onMarkerMouseEnter.bind(this),
							markerPress: this.onMarkerPress.bind(this)
						})
					});
					// Legend Configuration
					this.oGanttChartWithTable.setAxisTimeStrategy(this._createZoomStrategy());
				},
				rerenderMainControls: function() {
					this.oGanttChartContainer.rerender();
				},
				onMarkerMouseEnter: function (oEvent) {
					debugger;
					var fnFormatDate = function (date) {
						return date.substr(0,4).concat("-").concat(date.substr(4,2)).concat("-").concat(date.substr(6,2));
					}
					var oMarker = oEvent.getSource();
					var oBindingContext = oMarker.getBindingContext();
					this.showDataPanel({
						Element: "Marker",
						Action: "Mouse Over",
						Data: "-------------",
						Text: oBindingContext.getProperty("Text"),
						Date: fnFormatDate(oBindingContext.getProperty("date"))
					});
				},
				showDataPanel: function (oData) {
					var oDataPanel = this.getView().byId("idDataPanel");
					var aLeft = Object.keys(oData);
					oDataPanel.destroyContent();
					var aResultContent = new sap.m.VBox();
					for (var i=0; i<aLeft.length; i++) {
						aResultContent.addItem( new sap.m.HBox({
							items:[
								new sap.m.Label({text: aLeft[i]}),
								new sap.m.Label({text: oData[aLeft[i]]}).addStyleClass("sapUiSmallMarginBegin")
							]
						}));
					}
					oDataPanel.addContent(aResultContent);
				},
				onMarkerPress: function (oEvent) {
					var oMarker = oEvent.getSource();
					var oBindingContext = oMarker.getBindingContext();
					this.showDataPanel({
						"Element": "Marker",
						"Action": "Press",
						"Data": "-------------",
						"Text": oBindingContext.getProperty("Text"),
						"Date": oBindingContext.getProperty("date")
					});
				},
				fnTimeConverter: function (sTimestamp) {
					return sap.gantt.misc.Format.abapTimestampToDate(sTimestamp);
				},
				rectangleColor: function (sStatus) {
					switch (sStatus) {
					case "anfrageunterlagen":
						return "#0FAAFF";
					case "konstruktion":
						return "#008FD3";
					case "csc_vergabe":
						return "#0076CB";
					case "p_freigabe":
						return "#0F46A7";
					case "b_freigabe":
						return "#003283";
					case "KSW_note3":
						return "#FFAF00";
					case "KSW_oNote":
						return "#EB7300";
					case "prototypen_laminate":
						return "#D04512";
					case "SWZ_optimlerung":
						return "#BCDC50";
					case "SWZ_note3":
						return "#4FB81C";
					case "SWZ_note1":
						return "#247230";
					default:
						return "#5CBAE5";
					}
				},
				_createZoomStrategy: function () {
					var oTimeLineOptions = {
						"1day": {
							innerInterval: {
								unit: sap.gantt.config.TimeUnit.day,
								span: 3,
								range: 90
							},
							largeInterval: {
								unit: sap.gantt.config.TimeUnit.week,
								span: 3,
								pattern: "MMM yyyy,'Week' ww"
							},
							smallInterval: {
								unit: sap.gantt.config.TimeUnit.day,
								span: 3,
								pattern: "EEE dd"
							}
						},
						"1month": {
							innerInterval: {
								unit: sap.gantt.config.TimeUnit.month,
								span: 1,
								range: 90
							},
							largeInterval: {
								unit: sap.gantt.config.TimeUnit.month,
								span: 1,
								pattern: "MMM, YYYY"
							},
							smallInterval: {
								unit: sap.gantt.config.TimeUnit.week,
								span: 1,
								pattern: "w"
							}
						},
						"1year": {
							innerInterval: {
								unit: sap.gantt.config.TimeUnit.week,
								span: 1,
								range: 20
							},
							largeInterval: {
								unit: sap.gantt.config.TimeUnit.month,
								span: 1,
								pattern: "MMM, YYYY"
							},
							smallInterval: {
								unit: sap.gantt.config.TimeUnit.week,
								span: 1,
								pattern: "w"
							}
						}
					};
		
					return new sap.gantt.axistime.ProportionZoomStrategy({
						totalHorizon: new sap.gantt.config.TimeHorizon({
							startTime: "20181101000000",
							endTime: "20201231000000"
						}),
						visibleHorizon: new sap.gantt.config.TimeHorizon({
							startTime: "20181101000000",
							endTime: "20201231000000"
						}),
						timeLineOptions: oTimeLineOptions,
						timeLineOption: oTimeLineOptions["1month"],
						coarsestTimeLineOption: oTimeLineOptions["1year"],
						finestTimeLineOption: oTimeLineOptions["1day"]
					});
				}
			});

			this.oView = sap.ui.xmlview({
				viewContent: this.querySelector('script[ui5xml]').innerHTML,
				controller: new window.$ChartControllerFactory()
			});

			this.oView.placeAt(this.$div);
			
			this._props = {};
		}

		//When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {
			debugger;
			this._props = { ...this._props, ...oChangedProperties };
		}

		//When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
			debugger;
			window.$UI5WidgetController.rerenderMainControls();
		}
	});
})();