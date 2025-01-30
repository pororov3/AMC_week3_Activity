import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Activity4 = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('Age:');
  const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [comment, onChangeComment] = React.useState('Contact:');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me:');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.Uwbs9KoI7nrnrn6jNy0sQAHaHa?rs=1&pid=ImgDetMain',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name == 'Name:' ? '' : name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/011/020/009/original/age-icon-design-illustration-arrow-symbol-age-limit-concept-vector.jpg',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age == 'Age:' ? '' : age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.svgrepo.com/show/374529/address.svg',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address == 'Address:' ? '' : address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://img.freepik.com/premium-vector/school-icon_313674-31138.jpg',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school == 'School:' ? '' : school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/033/176/717/small/online-course-icon-vector.jpg',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course == 'Course:' ? '' : course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://e7.pngegg.com/pngimages/818/690/png-clipart-email-computer-icons-gmail-email-miscellaneous-angle.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email == 'Email:' ? '' : email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment == 'Contact:' ? '' : comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://e7.pngegg.com/pngimages/213/478/png-clipart-computer-icons-scalable-graphics-font-conference-for-management-accounting-research-about-icon-text-computer-program-thumbnail.png',
            }}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me:"
            value={aboutMe == 'About Me:' ? '' : aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default Activity4;
