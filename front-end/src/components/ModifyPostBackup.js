import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Navigation from "./Navigation";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePostDetails } from "../hooks/usePostDetails";

import { useQuery, useMutation, useQueryClient } from "react-query";

export default function ModifyPost() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { isLoading, data, isError, error } = usePostDetails(id)
    





  return (
    <>
      <Navigation />
      {JSON.stringify(data.data)}
    </>
  );
}
