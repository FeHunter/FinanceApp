/*
O que fazer?

Adicionar aba para o usuário adicionar suas contas, gasto e objetivos de consumo.

*/

import { Card } from "../../Visual Components/Card/Card";
import { Table } from "./ManagerTable/Table";

export function FinanceManager (){
    return (
        <Card title="Manager">
            <p>To manager your financial life</p>
            <Table />
        </Card>
    );
}