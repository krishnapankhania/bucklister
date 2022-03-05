import Head from "next/head";
import Layout from "../components/Layout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import HomeTabs from "../components/HomeTabs";
export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Head>
        <title>Bucklister</title>
        <meta name="description" content="Create & explore Bucketlist for free." />
      </Head>
      <Layout>
       <HomeTabs/>
      </Layout>
    </div>
  );
}
