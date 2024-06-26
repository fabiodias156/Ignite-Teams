import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';

import { Container} from './styles';
import { HightLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['League of Legends', 'Amigos', 'Familia'])

  return (
    <Container>
      <Header />
      <HightLight 
        title="Turmas"
        subtitle="Jogue com a sua Turma" 
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
        />
        )}
        contentContainerStyle={groups.length === 0 && {flex:1}}
        ListEmptyComponent={() => (
        <ListEmpty 
          message="Que tal cadastrar a Primeira Turma" />
        )}
      />

      <Button 
        title="Criar nova Turma"
      />
      
    </Container>
  );
}

