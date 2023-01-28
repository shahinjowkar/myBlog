import { Button, Container, TextField } from "@mui/material";
import { Form, Formik } from "formik";

import { Box } from "@mui/system";
import Header from "../components/Header";
import React from "react";

export default function GenPost() {
  return (
    <>
      <Formik
        initialValues={{ m1: "", m2: "", m3: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(form) => (
          <Form>
            <Header />
            <Container
              maxWidth={false}
              disableGutters={true}
              sx={{
                m: 0,
                p: 0,
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  minHeight: "80vh",
                  width: "80vw",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  name="m1"
                  onChange={form.handleChange}
                  value={form.values.m1}
                  focused
                  inputProps={{ style: { color: "white" } }}
                />
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  focused
                  name="m2"
                  onChange={form.handleChange}
                  value={form.values.m2}
                  inputProps={{ style: { color: "white" } }}
                />
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  name="m3"
                  onChange={form.handleChange}
                  value={form.values.m3}
                  inputProps={{ style: { color: "white" } }}
                  focused
                />
                <Button
                  variant="contained"
                  onClick={(e) => {
                    form.handleSubmit();
                  }}
                >
                  submit
                </Button>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}
