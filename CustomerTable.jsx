import React from "react";
import Button from "../Shad/button";
import Input from "../Shad/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Shad/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../Shad/table";
import "../Style/CustomerTable.css"; // Import the CSS file

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
];

export const CustomerTable = () => {
  return (
    <div>
      <div className="customer-table-container">
        <div>
          <h2 className="customer-table-header">All Customers</h2>
          <p className="customer-table-subtitle">Active Members</p>
        </div>
        <div className="flex items-center gap-4">
          <Input placeholder="Search" className="search-input" />
          <Select defaultValue="newest">
            <SelectTrigger className="sort-select">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.email}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.company}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.country}</TableCell>
              <TableCell>
                <Button
                  variant={customer.status === "Active" ? "default" : "destructive"}
                  className="status-button"
                >
                  {customer.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
