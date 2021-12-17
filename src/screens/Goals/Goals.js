import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ListItem from '../../components/ListItem';
import SubTitle from '../../components/SubTitle';

function Goals() {
  return (
    <ScrollView>
      <View style={{padding: 15}}>
        <ListItem size="m" text="نشر كتاب الله على أوسع نطاق وبدون الخروج من المنزل" />
        <ListItem size="m" text="نشر القراءات والروايات القرآنية" />
        <ListItem size="m" text="ضبط المخارج والصفات وصون الألسن عن اللحن" />
        <ListItem size="m" text="مساعدة من كان له ضعف في قراءة القرآن وذلك بإقامة دورات في أحكام التلاوة" />
        <ListItem size="m" text="تخريج طلبة مجازين متقنين يخدمون المقرأة" />
      </View>
    </ScrollView>
  );
}

export default Goals;
