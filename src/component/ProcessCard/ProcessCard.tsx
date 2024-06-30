import React, { FC } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';

interface ProcessCardProps {
    process: {
        id: number;
        partNo: number;
        partName: string;
        machineName: string;
        drawingIssueNo: number;
        operationNo: number;
        operationName: string;
        materialDetails: number;
    };
}

const ProcessCard: FC<ProcessCardProps> = ({ process }) => {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            className="w-[300px] h-fit cursor-pointer transition-all"
            withBorder
        >
            <div className="h-[340px] flex flex-col justify-between">
                <Card.Section>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={80}
                        alt="Norway"
                    />
                </Card.Section>

                <div className="flex flex-col mt-4 mb-4 font-sans">
                    <span>Part No: <Badge color="blue" size="sm">{process.partNo}</Badge></span>
                    <span>Part Name: <Badge color="blue" size="sm">{process.partName}</Badge></span>
                    <span>Machine Name: <Badge color="blue">{process.machineName}</Badge></span>
                    <span>Drawing Issue No: <Badge color="blue">{process.drawingIssueNo}</Badge></span>
                    <span>Operation No: <Badge color="blue">{process.operationNo}</Badge></span>
                    <span>Operation Name: <Badge color="blue">{process.operationName}</Badge></span>
                    <span>Material Details: <Badge color="blue">{process.materialDetails}</Badge></span>
                </div>
            </div>
        </Card>
    );
};

export default ProcessCard;
