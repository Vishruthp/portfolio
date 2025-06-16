import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { companies } from "@/constants/constants";
import CustomDialog from "./dialog";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { CustomChart } from "../chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
function Work() {
  return (
    <Card className="w-4xl m-4">
      <CardHeader>
        <CardTitle>WORK</CardTitle>
        <CardDescription>Companies I have worked in</CardDescription>
      </CardHeader>
      <CardContent>
        <ResizablePanelGroup direction="horizontal" className="w-full">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Period</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companies.map((company, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <CustomDialog
                          title={company.title}
                          description={company.description}
                          triggerText={company.title}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <CustomDialog
                          title={company.title}
                          description={company.description}
                          triggerText={company.period}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <div className="w-full max-w-[300px]">
                <CustomChart />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="my-4" />
      </CardContent>
    </Card>
  );
}

export default Work;
