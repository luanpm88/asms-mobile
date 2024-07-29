import React, { useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

interface ActionMenuProps {
  itemId: number;
}

const actions = [
  { id: 1, icon: 'sync', title: 'Sync' },
  { id: 2, icon: 'edit', title: 'Edit' },
  { id: 3, icon: 'delete', title: 'Remove' },
];

const ActionMenu = ({ itemId }: ActionMenuProps) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const handleAction = (actionId) => {
    console.log(`Action ${actionId} on item ${itemId}`);
    hideMenu();
  };

  return (
    <Menu
      visible={visible}
      anchor={<Text onPress={showMenu}><Icon name="more-vert" size={24} /></Text>}
      onRequestClose={hideMenu}
    >
      {actions.map(action => (
        <MenuItem key={action.id} onPress={() => handleAction(action.id)}>
          <Icon name={action.icon} size={24} /> {action.title}
        </MenuItem>
      ))}
      <MenuDivider />
    </Menu>
  );
};

export default ActionMenu;
 