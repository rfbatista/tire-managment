import { Divider, Text, VStack } from 'native-base';
import * as React from 'react';

export const ModelItem = () => {
	return (
		<VStack space={1}>
			<Text fontSize='lg'>Geolandar A/T G015</Text>
			<Text fontSize='sm'>Yokohama</Text>
		</VStack>
	);
};
