import React, { ReactElement } from "react";
import { Text } from "@mantine/core";
import { translate } from '../../translations';

interface ResultCountProps {
  resultCount: number;
  isLoading: boolean;
}

const ResultCount = ({ resultCount, isLoading }: ResultCountProps): ReactElement => {
  console.log('ResultCount - Rendering with props:', { resultCount, isLoading });

  if (isLoading) {
    console.log('ResultCount - Rendering loading state');
    return <Text size="xs">Loading results...</Text>;
  }

  if (resultCount === 1) {
    console.log('ResultCount - Rendering single result');
    return <Text size="xs">1 result</Text>;
  }

  console.log('ResultCount - Rendering multiple results:', resultCount);
  return <Text size="xs">{resultCount} results</Text>;
};

export default ResultCount; 