import {supabase} from "../lib/supabaseClient"

export const signUp =  async ({email, password}) =>{
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
    return {data,error}
}

export const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  return {data, error}
};

export const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
  console.log("asdf", data, error)
  return {data, error}
};

export const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  return {data, error}
};

export const signInWithDiscord = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
  });
  console.log("asdf", data, error)
  return {data, error}
};

export const signInWithFigma = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "figma",
  });
  console.log("asdf", data, error)
  return {data, error}
};

export const signInWithLinkedIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "linkedin_oidc",
  });
  console.log("asdf", data, error)
  return {data, error}
};

export const forgetPass = async (email) =>{
  console.log("email", email)
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo:"http://localhost:3001/reset-password"
  })
  return { data, error}
}

export const resetPass = async (password) => {
  const { data, error } = await supabase.auth.updateUser({
      password,
    });

  return {data, error}
}
