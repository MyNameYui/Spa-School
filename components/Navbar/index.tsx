import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { Layout } from "@/components/Layout/Layout";
import { AcmeLogo } from "@/components/Icons/Acme";
import { BsDiscord } from "react-icons/bs";
import { useTheme as useNextTheme } from "next-themes";

export const AppBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Layout>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">หน้าแรก</Navbar.Link>
          <Navbar.Link isActive href="#">
            เกี่ยวกับ รร.
          </Navbar.Link>
          <Navbar.Link href="#">บุคลากร</Navbar.Link>
          <Navbar.Link href="#">ดาวโหลดไฟล์.</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Link
            css={{
              m: "0 6px",
              "& svg": {
                transition: "$default",
              },
              color: "$accents6",
              "&:hover": {
                "& svg": {
                  opacity: 0.7,
                },
              },
            }}
          >
            <BsDiscord size={24} />
          </Link>
          <Navbar.Link color="inherit" href="#">
            เข้าสู่ระบบ
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              สมัครบัญชี
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};
