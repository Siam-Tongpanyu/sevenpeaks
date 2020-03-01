export const loadGuardianList = props => {
  return {
    type: "LOADGUARDIANLIST",
    payload: props
  };
};

export const searchGuardianList = props => {
  return {
    type: "SEARCHGUARDIANLIST",
    payload: props
  };
};

export const currentGuardianList = props => {
  return {
    type: "CURRENTPAGEGUARDIANLIST",
    payload: props
  };
};

export const orderGuardianList = props => {
  return {
    type: "ORDERGUARDIANLIST",
    payload: props
  };
};

export const currentGuardianDetail = props => {
  return {
    type: "CURRENTGUARDIANDETAIL",
    payload: props
  };
};