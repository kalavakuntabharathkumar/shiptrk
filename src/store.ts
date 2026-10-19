import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
export type ShipmentStatus = 'In transit' | 'Delivered' | 'Delayed' | 'Label created';
export type Shipment = { id:string; tracking:string; recipient:string; origin:string; destination:string; eta:string; status:ShipmentStatus; progress:number; carrier:string };
const initial: Shipment[] = [
 {id:'SHP-10482',tracking:'FX-8049-2211',recipient:'Olivia Martin',origin:'Austin, TX',destination:'Denver, CO',eta:'Today, 4:30 PM',status:'In transit',progress:72,carrier:'FedEx'},
 {id:'SHP-10481',tracking:'UP-9021-1844',recipient:'Noah Williams',origin:'Seattle, WA',destination:'Portland, OR',eta:'Today, 2:15 PM',status:'Delivered',progress:100,carrier:'UPS'},
 {id:'SHP-10480',tracking:'DH-1830-6629',recipient:'Ava Johnson',origin:'Chicago, IL',destination:'Columbus, OH',eta:'Tomorrow, 9:00 AM',status:'Delayed',progress:48,carrier:'DHL'},
 {id:'SHP-10479',tracking:'US-1102-7751',recipient:'Liam Brown',origin:'Miami, FL',destination:'Atlanta, GA',eta:'Oct 29, 11:20 AM',status:'In transit',progress:61,carrier:'USPS'},
 {id:'SHP-10478',tracking:'FX-7720-5518',recipient:'Sophia Davis',origin:'Phoenix, AZ',destination:'Los Angeles, CA',eta:'Oct 29, 1:45 PM',status:'Label created',progress:8,carrier:'FedEx'},
 {id:'SHP-10477',tracking:'UP-6641-2080',recipient:'Ethan Wilson',origin:'Boston, MA',destination:'New York, NY',eta:'Yesterday, 5:10 PM',status:'Delivered',progress:100,carrier:'UPS'},
 {id:'SHP-10476',tracking:'DH-4190-0073',recipient:'Isabella Garcia',origin:'Nashville, TN',destination:'Charlotte, NC',eta:'Today, 6:00 PM',status:'In transit',progress:83,carrier:'DHL'}
];
const shipmentsSlice = createSlice({name:'shipments',initialState:initial,reducers:{statusUpdated(state,action:PayloadAction<{id:string;status:ShipmentStatus}>){const s=state.find(x=>x.id===action.payload.id);if(s){s.status=action.payload.status;s.progress=action.payload.status==='Delivered'?100:s.progress;}},shipmentAdded(state,action:PayloadAction<Shipment>){state.unshift(action.payload);}}});
export const {statusUpdated,shipmentAdded}=shipmentsSlice.actions;
export const store=configureStore({reducer:{shipments:shipmentsSlice.reducer}});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
