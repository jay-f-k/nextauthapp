import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/Schemas/UserSchema";
import ConnectDb from "@/DB/ConnectDb";
import bcrypt from "bcrypt";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials, req) {
				await ConnectDb();

				const user = await User.findOne({ email: credentials.email });

				if (!user) {
					return null;
				}

				const verifyPassword = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!verifyPassword) {
					return null;
				}
				return user;
			},
		}),
	],
	callbacks: {
		async signIn({ profile }) {
			await ConnectDb();

			const newUser = await User.findOne({ email: profile.email });

			if (!newUser) {
				const pass = profile?.at_hash || profile?.node_id;
				await User.create({
					email: profile.email,
					username: profile.name,
					password: pass,
				});
			}
			return true;
		},
		async jwt({ token }) {
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.sub;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	secret: process.env.NEXT_SECRET,
};
