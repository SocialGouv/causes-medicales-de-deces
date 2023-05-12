import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Image,
  InputGroup,
  InputLeftElement,
  Stack,
  Text
} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete';
import { useState } from 'react';
import { MenuSubTitle } from './MenuSubTitle';
import { MenuTitle } from './MenuTitle';
import { FiltersSexes } from '../filters/Sexes';
import { FiltersAges } from '../filters/Ages';
import { FilterCauses } from '../filters/Causes';
import { SubMenu } from './SubMenu';

const fakeSexes = [
  { id: 0, label: 'Homme' },
  { id: 1, label: 'Femme' },
  { id: 2, label: 'Inconnu' }
];

const fakeAgeRanges = [
  { id: 0, label: '0-10 ans', minAge: 0, maxAge: 10 },
  { id: 1, label: '11-20 ans', minAge: 11, maxAge: 20 },
  { id: 2, label: '21-30 ans', minAge: 21, maxAge: 30 },
  { id: 3, label: '31-40 ans', minAge: 31, maxAge: 40 },
  { id: 4, label: '41-50 ans', minAge: 41, maxAge: 50 },
  { id: 5, label: '51-60 ans', minAge: 51, maxAge: 60 },
  { id: 6, label: '61-70 ans', minAge: 61, maxAge: 70 },
  { id: 7, label: '71 ans et +', minAge: 71 }
];

const causes = [
  { id: 0, label: 'Suicide' },
  { id: 1, label: 'Avc' },
  { id: 2, label: 'Tuberculose' }
];

export type Filters = {
  causes: number[];
  ages: {
    min: number;
    max?: number;
  }[];
  sexes: number[];
};

export function Menu() {
  const [filters, setFilters] = useState<Filters>({
    causes: [],
    ages: [],
    sexes: []
  });

  console.log(filters);

  return (
    <Flex
      flexDir={'column'}
      py={8}
      borderRadius={16}
      bg="white"
      maxW={80}
      boxShadow="box-shadow: 0px 10px 15px -3px rgba(36, 108, 249, 0.04), 0px 4px 6px -2px rgba(36, 108, 249, 0.04);"
    >
      <Box pl={4} px={8}>
        <Image src="/CM2D.svg" alt="CM2D Logo" w={24} />
      </Box>
      <Box mt={5} h="3px" w="full" bg="gray.50" />
      <Box mt={8} px={8}>
        <MenuTitle title="Cause de décès" />
        <FilterCauses
          filters={filters}
          setFilters={setFilters}
          causes={causes}
        />
      </Box>
      <Box mt={8} px={8}>
        <MenuTitle title="Filtres" />
        <SubMenu
          title="Démographie"
          icon={{ src: 'icons/user-search.svg', alt: 'Onglet démographie' }}
        >
          <Stack dir="column" spacing={4}>
            <FiltersSexes
              filters={filters}
              setFilters={setFilters}
              sexes={fakeSexes}
            />
            <FiltersAges
              filters={filters}
              setFilters={setFilters}
              ages={fakeAgeRanges}
            />
          </Stack>
        </SubMenu>
        <SubMenu
          title="Données du décès"
          icon={{
            src: 'icons/user-search.svg',
            alt: 'Onglet données du décès'
          }}
        >
          <Stack dir="column" spacing={4}>
            <FiltersSexes
              filters={filters}
              setFilters={setFilters}
              sexes={fakeSexes}
            />
            <FiltersAges
              filters={filters}
              setFilters={setFilters}
              ages={fakeAgeRanges}
            />
          </Stack>
        </SubMenu>
      </Box>
    </Flex>
  );
}
