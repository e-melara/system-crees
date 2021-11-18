import styled from 'styled-components'

export const BackgroundPortada = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const StepActions = styled.div`
  margin-top: 24px;
`

export const StepContent = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  min-height: 200px;
  text-align: center;
  border-radius: 2px;
  margin-left: 350px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px dashed #e9e9e9;
  background-color: #fafafa;
`

export const ImagePeopleDoc = styled.figure`
  margin: 30px -30px;
  img {
    width: 100%;
    height: 200px;
    padding-bottom: 10px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  .content-navigation {
    width: 350px;
    top: 0;
    bottom: 0;
    position: fixed;
    padding: 20px 30px;
    background-color: #603dd2;
  }
  .ant-steps {
    max-width: 300px;
    .ant-steps-item-container {
      overflow: auto;
      margin-bottom: 15px;
    }
    .ant-steps-item {
      margin-bottom: 15px;
      .ant-steps-item-tail {
        height: 72px;
        top: 35px;
        left: 24px;
        &::after {
          background-color: #9984ea;
        }
      }
      .ant-steps-item-icon {
        width: 50px;
        height: 70px;
        display: flex;
        text-align: center;
        align-items: center;
        border-radius: 10px;
        margin-right: 25px;
        border-color: #9984ea;
        justify-content: center;
        background-color: transparent;
        .ant-steps-icon {
          font-size: 1.4rem;
          color: #9984ea;
          font-weight: 600;
          font-family: 'Roboto';
        }
      }
      .ant-steps-item-content {
        .ant-steps-item-title {
          color: #907ae9;
          font-family: 'Lato';
          font-size: 1.1rem;
          font-weight: bold;
        }
        .ant-steps-item-description {
          padding: 0px;
          color: #c3b4f9;
          font-size: 1.5rem;
          font-family: 'Roboto';
          font-weight: bold;
        }
      }
      &.ant-steps-item-error {
        .ant-steps-item-icon,
        .ant-steps-item-icon .ant-steps-icon {
          border-color: #ed0e28;
          color: #ed0e28 !important;
        }
      }
    }
    .ant-steps-item-active {
      .ant-steps-item-icon {
        border-color: #fecd4a;
      }
      .ant-steps-item-title {
        color: white !important;
      }
      .ant-steps-icon,
      .ant-steps-item-description {
        color: #fecd4a !important;
      }
    }
  }
`

export const H1Title = styled.h1`
  text-align: left;
  padding-top: 20px;
  margin-bottom: 0px;
  font-family: 'Lato';
  font-weight: bold;
  ~ p {
    font-size: 1rem;
    text-align: left;
    font-family: 'Roboto';
  }
`

export const H2Title = styled.h2`
  text-align: left;
  font-weight: 800;
  font-family: 'Roboto';
`

export const DivContainerForm = styled.div`
  padding: 40px 40px 40px;
  background-color: white;
  .ant-form-item-label,
  .ant-form-item-control {
    font-family: 'Lato';
  }
`

export const DivContainerFormLogo = styled.div``

export const DescriptionH3 = styled.h3`
  span {
    color: #603dd2;
    font-size: 1.2rem !important;
  }
`
