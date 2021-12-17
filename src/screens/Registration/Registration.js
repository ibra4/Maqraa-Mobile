import React from 'react';
import {ScrollView, Text} from 'react-native';
import MainTitle from '../../components/MainTitle';

function Registration() {
  return (
    <ScrollView>
      <Text>
        توفر جهاز كمبيوتر أو هاتف ذكي يحتوي على تطبيق قوقل ميت أو زووم و الواتس
        آب و التلجرام ليستفيد من خدمات المقرأة صوتا وصورة
      </Text>
      <Text />
      <Text />
      <MainTitle title="التسجيل" />
      <Text>
        تكون كل 6 أشهر وذلك عن طريق استمارة البيانات التي تنشر على الصفحة
      </Text>
      <Text />
      <Text>
        كل طالب (ة) مسجل (ة) في المقرأة ملزم بتسجيل المواعيد والالتزام بها
        الغيابات تكون مبررة وكل شيء مبني على الاحترام والأخلاق كلما كنت ملتزما
        بالبرنامج كلما ربحت الوقت
      </Text>
    </ScrollView>
  );
}

export default Registration;
