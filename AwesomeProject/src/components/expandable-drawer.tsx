import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';


export type ExpandableDrawerProps = {
  title: string;
  choices: Map<string, string>;
  navigation: DrawerNavigationProp<any>;
};

const ExpandableDrawer: React.FC<ExpandableDrawerProps> = ({
  title,
  choices,
  navigation,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onPress = (): void => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigation = (screen: string): void => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>

      {isExpanded && (
        <ScrollView>
          {[...choices.keys()].map((label: string) => {
            const screen = choices.get(label);

            if (screen !== undefined) {
              return (
                <DrawerItem
                  key={label}
                  label={label}
                  onPress={() => handleNavigation(screen)}
                />
              );
            }

            return null;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default ExpandableDrawer;
