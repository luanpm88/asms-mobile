import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; // Hoặc thư viện icon bạn sử dụng
import { Tabs } from '@ant-design/react-native'; // Đảm bảo thư viện này đã được cài đặt

const App = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showDetailsParents, setShowDetailsParents] = useState(false);
  const [showAdress, setShowAdress] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        centerComponent={
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>Phạm Tùng Anh</Text>
          </View>
        }
        containerStyle={styles.header}
        placement="center" // Đảm bảo nội dung được căn giữa
      />
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Tabs
            tabs={[
              { title: 'Hồ sơ' },
              { title: 'Lớp học' },
              { title: 'Học phí' },
              { title: 'Điểm tích luỹ' },
            ]}
            prerenderingSiblingsNumber={0} // Giúp cải thiện hiệu suất bằng cách chỉ render tab hiện tại
          >
            <View style={styles.tabContent}>
              <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={styles.item}>
                <View style={styles.numberIconContainer}>
                  <Text style={styles.numberIconText}>1</Text>
                </View>
                <Text style={styles.itemText}>Thông tin chung</Text>
                <Icon
                  name={showDetails ? "chevron-up" : "chevron-down"} // Thay đổi icon tùy thuộc vào trạng thái
                  size={20}
                  color="#333"
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              {showDetails && (
                <>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Họ tên</Text>
                      <Text style={styles.itemSubText}>Nguyễn Đăng Phong</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="phone" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Số điện thoại</Text>
                      <Text style={styles.itemSubText}>0845308838</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="envelope" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Địa chỉ email</Text>
                      <Text style={styles.itemSubText}>nguyendangphong0099@gmail.com</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="birthday-cake" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Ngày sinh</Text>
                      <Text style={styles.itemSubText}>01/02/2000</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="transgender" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Giới tính</Text>
                      <Text style={styles.itemSubText}>Nam</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user-secret" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Biệt danh</Text>
                      <Text style={styles.itemSubText}>Cóc</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="building" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Trung tâm</Text>
                      <Text style={styles.itemSubText}>Sài Gòn</Text>
                    </View>
                  </View>
                </>
              )}
              <TouchableOpacity onPress={() => setShowDetailsParents(!showDetailsParents)} style={styles.item}>
                <View style={styles.numberIconContainer}>
                  <Text style={styles.numberIconText}>2</Text>
                </View>
                <Text style={styles.itemText}>Thông tin phụ huynh</Text>
                <Icon
                  name={showDetailsParents ? "chevron-up" : "chevron-down"} // Thay đổi icon tùy thuộc vào trạng thái
                  size={20}
                  color="#333"
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              {showDetailsParents && (
                <>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Họ tên</Text>
                      <Text style={styles.itemSubText}>Nguyễn Đăng Phong</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="phone" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Số điện thoại</Text>
                      <Text style={styles.itemSubText}>0845308838</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="envelope" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Địa chỉ email</Text>
                      <Text style={styles.itemSubText}>nguyendangphong0099@gmail.com</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="birthday-cake" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Ngày sinh</Text>
                      <Text style={styles.itemSubText}>01/02/2000</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="transgender" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Giới tính</Text>
                      <Text style={styles.itemSubText}>Nam</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user-secret" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Biệt danh</Text>
                      <Text style={styles.itemSubText}>Cóc</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="building" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Trung tâm</Text>
                      <Text style={styles.itemSubText}>Sài Gòn</Text>
                    </View>
                  </View>
                </>
              )}

              <TouchableOpacity onPress={() => setShowAdress(!showAdress)} style={styles.item}>
                <View style={styles.numberIconContainer}>
                  <Text style={styles.numberIconText}>3</Text>
                </View>
                <Text style={styles.itemText}>Thông tin địa chỉ</Text>
                <Icon
                  name={showAdress ? "chevron-up" : "chevron-down"} // Thay đổi icon tùy thuộc vào trạng thái
                  size={20}
                  color="#333"
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              {showAdress && (
                <>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Họ tên</Text>
                      <Text style={styles.itemSubText}>Nguyễn Đăng Phong</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="phone" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Số điện thoại</Text>
                      <Text style={styles.itemSubText}>0845308838</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="envelope" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Địa chỉ email</Text>
                      <Text style={styles.itemSubText}>nguyendangphong0099@gmail.com</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="birthday-cake" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Ngày sinh</Text>
                      <Text style={styles.itemSubText}>01/02/2000</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="transgender" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Giới tính</Text>
                      <Text style={styles.itemSubText}>Nam</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="user-secret" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Biệt danh</Text>
                      <Text style={styles.itemSubText}>Cóc</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}>
                      <Icon name="building" size={20} color="#333" />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemText}>Trung tâm</Text>
                      <Text style={styles.itemSubText}>Sài Gòn</Text>
                    </View>
                  </View>
                </>
              )}
            </View>

            {/* Các tab khác */}
            <View style={styles.tabContent}>
            
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <Icon name="book" size={20} color="green" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.itemSubText}>Lớp đang học</Text>
              </View>
            </View>
             
            </View>
            <View style={styles.tabContent}>
            </View>
            <View style={styles.tabContent}>
              <Text>Điểm tích luỹ</Text>
            </View>
          </Tabs>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000', // Màu nền đỏ đậm
  },
  header: {
    backgroundColor: '#8B0000', // Màu nền đỏ đậm
    borderBottomWidth: 0,
    height: 80, // Đảm bảo chiều cao đủ để chứa nội dung
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Đảm bảo container chiếm toàn bộ chiều cao của Header
    paddingBottom: 10, // Khoảng cách dưới cho Text
  },
  name: {
    color: 'white', // Màu chữ trắng
    fontSize: 20,
    textAlign: 'center', // Căn giữa chữ
  },
  content: {
    backgroundColor: 'white', // Màu trắng
    flex: 1,
    paddingHorizontal: 10, // Đảm bảo khoảng cách từ viền trái và phải
  },
  scrollViewContent: {
    flexGrow: 1, // Đảm bảo nội dung của ScrollView có thể cuộn
  },
  tabContent: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // Khoảng cách trên và dưới cho từng mục
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 0, // Đảm bảo không có margin ở hai bên
  },
  numberIconContainer: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  numberIconText: {
    fontSize: 16,
    color: 'white',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemSubText: {
    fontSize: 14,
    color: '#555',
  },
  arrowIcon: {
    marginLeft: 10, // Khoảng cách giữa text và icon
  },
  iconContainer: {
    marginRight: 10, // Khoảng cách giữa icon và text
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column', // Đặt text theo chiều dọc
  },
});

export default App;
