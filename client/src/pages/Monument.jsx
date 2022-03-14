import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Monument = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Stone_wheel_engraved_in_the_13th_century_built_Konark_Sun_Temple_in_Orissa%2C_India.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Sun Temple Konark</Title>
          <Desc>
          A UNESCO World Heritage Site, Konark Sun temple is a striking model of ancient artistry, fluidity of ideas, and a pedagogic treasury. Dedicated to the sun god, Surya, the first rays of the sun fall on the entrance of the temple. Much of the temple has fallen into rack and ruin but what remains still holds enough charm to captivate. An interpretation of a greater imagination, it has seen empires rise and fall, identities washed away, yet appealing to our sensorium even today.
          </Desc>
          <Price>&#8377; 20</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter> */}
            <Filter>
              <FilterTitle>Nationality</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Indian</FilterSizeOption>
                <FilterSizeOption>Foreign</FilterSizeOption>
                <FilterSizeOption>SAARC</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer> Adults: 
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <br />
            <AmountContainer>    Children:
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Book Now</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Monument;
