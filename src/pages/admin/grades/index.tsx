import DropDown from "../../../components/dropdown";
import { FlexContainer } from "../../../components/flexContainer";
import Header from "../../../components/header";
import SectionContainer, { SubContainer } from "../../../components/sectionContainer";
import { Table, TableHead, TableHeader, TableRow } from "../../../components/table";

export default function StudentGrade() {
    return (
        <SectionContainer className="space-y-3 pb-10 h-fit min-h-full">
            <Header label={"Student Grades Sheets"}></Header>
            <SubContainer>
                <FlexContainer>
                    <DropDown label={"Quarter"} placeholder={"Select Quarter"}>
                        <option value="">Quarter 1</option>
                        <option value="">Quarter 2</option>
                        <option value="">Quarter 3</option>
                        <option value="">Quarter 4</option>
                    </DropDown>
                </FlexContainer>
            </SubContainer>
            <SubContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Teacher</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Section</TableHead>
                            <TableHead>Quarter</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </SubContainer>
        </SectionContainer>
    )
}