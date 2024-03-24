'use server';
import Link from "next/link";
import SignOut from "./SignOut";
import { Button } from "../ui/button";
import getUser from "@/lib/supabase/actions/getUser";

export default async function Header() {

    const { data } = await getUser();

    const fontStyle = {
      fontWeight: 'bold',
      color: 'white'
    }
  
    return (
      <div style={{ position: 'fixed', // Fixes the header at the top
      top: 0, // Aligns the header at the top of the viewport
      left: 0, // Aligns the header to the left of the viewport
      width: '100%', // Ensures the header spans the full width of the viewport
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid #ccc',
      backgroundColor: 'black', // Ensures the header has a background color if it overlaps content
      zIndex: 1000, // Ensures the header is above other content 
        }}>
        <Link href="/" style={fontStyle}>
          Home
        </Link>
        <nav>
          {data.user ? (
            <SignOut />
          ) : (
            <Link href="/sign-in" style={fontStyle}>
              <Button>Sign-In</Button>
            </Link>
          )}
        </nav>
      </div>
    );
  }