import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const [selectedIcon, setSelectedIcon] = useState('home');

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ScrollView>
        <View style={styles.topSection}>
          <View style={styles.avatarContainer}>
            <Image source={require('../../../assets/Plate.jpg')} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <Text style={styles.restaurantText}>Sample Restaurant</Text>
            </View>
          </View>
        </View>

        {/* Image Card Section 1 */}
        <TouchableOpacity>
          <View style={[styles.imageCard, {marginBottom:1}]}>
            <Image
              source={require('../../../assets/SpecialDiscount.jpg')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        {/* Dashes */}
        <View style={styles.dashContainer}>
          <Icon name="minus" size={12} color="#0A8ED9" style={styles.blueDash} />
          <Icon name="minus" size={12} color="lightgray" style={styles.grayDash} />
          <Icon name="minus" size={12} color="lightgray" style={styles.grayDash} />
          <Icon name="minus" size={12} color="lightgray" style={styles.grayDash} />
          <Icon name="minus" size={12} color="lightgray" style={styles.grayDash} />
        </View>

        {/* Image Card Section 2 */}
        <TouchableOpacity>
          <View style={[styles.imageCard, {marginBottom:-5}]}>
            <View style={styles.horizontalImageContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/storepickup.jpg')}
                  style={styles.subImage}
                />
                <Text style={styles.imageText}>Store pickup</Text>
                <Text style={styles.subText}>Best quality</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/Bicycle.jpg')}
                  style={styles.subImage}
                />
                <Text style={styles.imageText}>Delivery</Text>
                <Text style={styles.subText}>Always on time</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Image Card Section 3 */}
        <TouchableOpacity>
          <View style={[styles.imageCard, { marginTop: 16, height: 165 }]}>
            <View style={styles.horizontalImageContainer}>
              {/* Left side */}
              <View style={styles.leftImageContainer}>
                <Text style={[styles.imageText, { marginTop: 54 }]}>Online reservation</Text>
                <Text style={[styles.subText, { marginTop: 10 }]}>Table booking</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.reserveButton}>
                    <Icon name="calendar" size={15} color="#0A8ED9" style={styles.reserveButtonIcon} />
                    <Text style={styles.reserveButtonText}>Reserve a table</Text>
                  </TouchableOpacity>
                  
                </View>
              </View>

              {/* Right side */}
              <View style={[styles.imageContainer, { marginTop: 1 }]}>
                <Image
                  source={require('../../../assets/Table.jpg')}
                  style={styles.subImage}
                />

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.reserveButton}>
                    <Text style={styles.reserveButtonText}>My reservations</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Promotion campaign */}
        <Text style={styles.promotionText}>Promotion campaign</Text>

        {/* Two Image Cards */}
        <View style={styles.horizontalImageContainer}>
          <TouchableOpacity>
            <View style={styles.promotionCard}>
              <Image
                source={require('../../../assets/ZipLock2.jpg')}
                style={[styles.subImage, { width: 165 }]} 
              />
              <Text style={styles.imageText}>  Discount all Excelsa</Text>
              <Text style={[styles.subText, {color:'black'}, {fontSize:12}]}>20% in all stores         </Text>
              <Text style={styles.subText}>  20/04/20 - 06/09/2020</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.promotionCard}>
              <Image
                source={require('../../../assets/ZipLock.jpg')}
                style={[styles.subImage, { width: 165 }]} 
              />
              <Text style={styles.imageText}>  Discount all Liberica</Text>
              <Text style={[styles.subText, {color:'black'} , {fontSize:12}]}>20% in all stores         </Text>
              <Text style={styles.subText}>  20/04/20 - 06/09/2020</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalImageContainer}>
          <TouchableOpacity>
            <View style={styles.promotionCard}>
              <Image
                source={require('../../../assets/cofee.jpg')}
                style={[styles.subImage, { width: 165 }]} 
              />
              <Text style={styles.imageText}>  Discount all Excelsa</Text>
              <Text style={[styles.subText, {color:'black'} , {fontSize:12}]}>20% in all stores         </Text>
              <Text style={styles.subText}>  20/04/20 - 06/09/2020</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.promotionCard}>
              <Image
                source={require('../../../assets/mock.jpg')}
                style={[styles.subImage, { width: 165 }]} 
              />
              <Text style={styles.imageText}>  Discount all Excelsa</Text>
              <Text style={[styles.subText, {color:'black'} , {fontSize:12}]}>20% in all stores         </Text>
              <Text style={styles.subText}>  20/04/20 - 06/09/2020</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <IconWithText name="home" text="Home" selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        <IconWithText name="shopping-cart" text="Stores" selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        <IconWithText name="book" text="Order" selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        <IconWithText name="user" text="Profile" selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      </View>
    </View>
  );
};

//function for the bottom icons 
const IconWithText = ({ name, text, selectedIcon, setSelectedIcon }) => (
  <TouchableOpacity
    onPress={() => setSelectedIcon(name)}
    style={[
      styles.iconContainer,
      selectedIcon === name ? { color: '#0A8ED9' } : null,
    ]}
  >
    <Icon name={name} size={24} color={selectedIcon === name ? '#0A8ED9' : 'gray'} />
    <Text style={[styles.iconText, selectedIcon === name ? { color: '#0A8ED9' } : null]}>{text}</Text>
  </TouchableOpacity>
);

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -190,
    bottom: -40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 14,
  },
  restaurantText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageCard: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 110,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 2,
    marginTop: 1,
  },
  horizontalImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  leftImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 13,
    borderColor: '#0A8ED9',
    borderWidth: 1,
  },
  reserveButtonText: {
    color: '#0A8ED9',
    marginLeft: 5,
  },
  reserveButtonIcon: {
    marginLeft: 5,
  },
  subImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 6,
  },
  promotionText: {
    fontSize: 16,
    fontWeight:'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  promotionCard: {
    marginHorizontal: -10,
    marginTop: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  dashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  blueDash: {
    marginRight: 5,
  },
  grayDash: {
    marginRight: 5,
  },
});

export default HomePage;
