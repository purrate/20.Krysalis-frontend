import React, { FC } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface MachineCardProps {
  machine: {
    id: number;
    name: string;
    process: string;
    number: number;
  };
}

const MachineCard: FC<MachineCardProps> = ({ machine }) => {

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[300px] h-fit  cursor-pointer transition-all"
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

        <div className="flex flex-col mt-4 mb-4">
          <div className="mb-2">
            <Text fw={500}>{machine.name}</Text>
          </div>
          <div className="flex gap-2">
            <Badge color="pink">{machine.process}</Badge>
            <Badge color="blue">{machine.number}</Badge>
          </div>
        </div>

        <Text size="sm" c="dimmed">
          Traub machine is simply based on cam system. A motor helps three shaft to spin as per required speed .
          These shaft have cam mounted on them which help to move the slide holding cutting tool.
          its fully systematic mechanism. And another motor helps to turn the main spindal which holds the raw material.
        </Text>
      </div>
    </Card>
  );
};

export default MachineCard;