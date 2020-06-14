import React, { useEffect, useRef } from "react";
import {
  PageHeader,
  Divider,
  Form,
  Input,
  Button,
  Spin,
  message,
  Row,
  Col,
  Select,
} from "antd";
import MainLayout from "../../shared/Layout";
import { SafetyOutlined } from "@ant-design/icons";
import { useAuthedAxios } from "../../../config/axios.config";
import { useLocation, useHistory } from "react-router-dom";

const { Option } = Select;

export default function UpdateGuard() {
  const {
    state: { guard },
  } = useLocation();
  const history = useHistory();

  if (!guard) history.push("/guards/view");

  const [{ loading, data, error }, updateDriver] = useAuthedAxios(
    {
      url: "/guard/update",
      method: "POST",
    },
    {
      manual: true,
    }
  );

  const onFinish = (data) => {
    console.log("Guard: ", guard);
    updateDriver({
      data: {
        ...data,
        _id: guard._id,
      },
    });
  };

  useEffect(() => {
    if (error) {
      const msg = error.response
        ? error.response.data
          ? error.response.data.message
            ? error.response.data.message
            : "Internal Server Error"
          : "Internal Server Error"
        : "Internal Server Error";
      message.error(msg);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log("Data: ", data);
      message.success("Driver Updated Successfully!");
    }
  }, [data]);
}
