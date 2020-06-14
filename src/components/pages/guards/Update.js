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
