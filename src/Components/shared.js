import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const Flexrow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Flexcolumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Subtitle = styled.div`
    margin-top: ${ props => props.top };
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #666666;
`;

export const Input = styled.input`
    width: 400px;
    height: 50px;
    border: 0.5px solid ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
    padding: 0 20px;
    margin-top: 25px;
    margin-botton: 10px;
    border-radius: 10px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    box-sizing:border-box;
    &::placeholder{
        font-size: 17px;
    }
`;

export const Submitbutton = styled.input`
    border:none;
    border-radius: 30px;
    margin-top:30px;
    margin-left: 300px;
    background-color: #C4C4C4;
    color: white;
    text-align:center;
    padding: 8px 0px;
    font-weight: 600;
    width: 120px;
    height: 60px;
    font-size: 17px;
`;

export const Text = styled.div`
    margin-top: ${ props => props.top };
    margin-right: ${ props => props.right };
    font-size: ${ props => props.size };
    color: #565656;
`;