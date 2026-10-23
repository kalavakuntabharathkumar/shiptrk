import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from './store';
import App from './App';
function renderApp(){return render(<Provider store={appStore}><App/></Provider>);}
describe('shipment dashboard',()=>{
 it('shows overview and shipment list',()=>{renderApp();expect(screen.getByText('Shipment overview')).toBeInTheDocument();expect(screen.getByText('SHP-10482')).toBeInTheDocument();});
 it('filters shipments by search query',()=>{renderApp();fireEvent.change(screen.getByLabelText('Search shipments'),{target:{value:'Olivia'}});expect(screen.getByText('SHP-10482')).toBeInTheDocument();expect(screen.queryByText('SHP-10481')).not.toBeInTheDocument();});
 it('opens shipment details',()=>{renderApp();fireEvent.click(screen.getByText('SHP-10482'));expect(screen.getByRole('dialog')).toBeInTheDocument();expect(screen.getByText('FX-8049-2211')).toBeInTheDocument();});
 it('filters by status',()=>{renderApp();fireEvent.change(screen.getByLabelText('Filter shipment status'),{target:{value:'Delivered'}});expect(screen.getByText('SHP-10481')).toBeInTheDocument();expect(screen.queryByText('SHP-10482')).not.toBeInTheDocument();});
 it('exports button is available',()=>{renderApp();expect(screen.getByText('Export report')).toBeInTheDocument();});
});
