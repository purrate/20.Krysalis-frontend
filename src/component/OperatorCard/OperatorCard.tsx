import React, { FC } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';

interface OperatorCardProps {
  operator: {
    id: number;
    name: string;
    machine: string;
    specification: string;
  };
}

const OperatorCard: FC<OperatorCardProps> = ({ operator }) => {

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[300px] h-fit  cursor-pointer transition-all"
      withBorder
    >
      <div className="flex flex-col justify-between">
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={60}
            alt="Norway"
          />
        </Card.Section>

        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={500}>{operator.name}</Text>
          </div>
          <div className="flex gap-2">
            <Badge color="pink">{operator.id}</Badge>
            <Badge color="blue">{operator.machine}</Badge>
          </div>
        </div>

        <Text size="sm" c="dimmed">
          Operator logged in at 9:15 AM on 2.08.2024 and logged out at 10:00 PM on 2.08.2024.
        </Text>
      </div>
    </Card>
  );
};

export default OperatorCard;