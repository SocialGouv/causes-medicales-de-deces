import { Dispatch, SetStateAction } from 'react';
import { Filters } from '../layouts/Menu';
import { MenuSubTitle } from '../layouts/MenuSubTitle';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  sexes: {
    id: number;
    label: string;
  }[];
};

export const FiltersSexes = (props: Props) => {
  const { filters, setFilters, sexes } = props;
  return (
    <Box>
      <MenuSubTitle title="Sexes" />
      <Flex gap={4} flexDirection="row" wrap="wrap">
        {sexes.map((sex, index) => (
          <Checkbox
            key={index}
            borderColor="primary.500"
            colorScheme="primary"
            value={sex.id}
            onChange={e => {
              if (e.target.checked) {
                setFilters({
                  ...filters,
                  sexes: [...filters.sexes, parseInt(e.target.value)]
                });
              } else {
                setFilters({
                  ...filters,
                  sexes: [
                    ...filters.sexes.filter(f => f !== parseInt(e.target.value))
                  ]
                });
              }
            }}
          >
            <Text as={filters.sexes.includes(sex.id) ? 'b' : 'span'}>
              {sex.label}
            </Text>
          </Checkbox>
        ))}
      </Flex>
    </Box>
  );
};
