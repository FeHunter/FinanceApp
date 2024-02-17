import { DefaultList } from "../../Default Resources/List/DefaultList";
import { Card } from "../../Visual Components/Card/Card";
import { ToggleMenu } from "../../Visual Components/ToggleMenu/ToggleMenu";

export function BillsManager (){
    return (
        <Card title="Bills Manager">
            <DefaultList />
        </Card>
    );
};