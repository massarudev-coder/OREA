import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [notice, setNotice] = useState("");

    function handleLogin() {
        if (!email.trim() || !password) {
            setNotice("Preencha seu e-mail e sua senha para continuar.");
            return;
        }

        router.replace("/(tabs)");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <View style={styles.brand}>
                            <View style={styles.brandIcon}>
                                <MaterialIcons name="auto-awesome" size={21} color={colors.gold} />
                            </View>
                            <View>
                                <Text style={styles.brandName}>OREA</Text>
                                <Text style={styles.brandSubtitle}>COSMIC VAULT</Text>
                            </View>
                        </View>

                        <View style={styles.heading}>
                            <Text style={styles.eyebrow}>ACESSO AO OBSERVATÓRIO</Text>
                            <Text style={styles.title}>Bem-vindo de volta</Text>
                            <Text style={styles.subtitle}>
                                Entre para explorar uma coleção verdadeiramente fora deste mundo.
                            </Text>
                        </View>

                        <View style={styles.formCard}>
                            <View style={styles.form}>
                                <Text style={styles.label}>E-mail</Text>
                                <View style={styles.inputWrapper}>
                                    <MaterialIcons
                                        name="mail-outline"
                                        size={21}
                                        color={colors.muted}
                                    />
                                    <TextInput
                                        accessibilityLabel="E-mail"
                                        style={styles.input}
                                        placeholder="voce@exemplo.com"
                                        placeholderTextColor={colors.muted}
                                        value={email}
                                        onChangeText={(value) => {
                                            setEmail(value);
                                            setNotice("");
                                        }}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="emailAddress"
                                        returnKeyType="next"
                                    />
                                </View>

                                <View style={styles.passwordLabelRow}>
                                    <Text style={styles.label}>Senha</Text>
                                    <Pressable
                                        accessibilityRole="button"
                                        onPress={() =>
                                            setNotice("A recuperação de senha ainda não está configurada.")
                                        }
                                    >
                                        <Text style={styles.textLink}>Esqueceu a senha?</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <MaterialIcons
                                        name="lock-outline"
                                        size={21}
                                        color={colors.muted}
                                    />
                                    <TextInput
                                        accessibilityLabel="Senha"
                                        style={styles.input}
                                        placeholder="Digite sua senha"
                                        placeholderTextColor={colors.muted}
                                        value={password}
                                        onChangeText={(value) => {
                                            setPassword(value);
                                            setNotice("");
                                        }}
                                        secureTextEntry={!showPassword}
                                        textContentType="password"
                                        returnKeyType="done"
                                        onSubmitEditing={handleLogin}
                                    />
                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                        hitSlop={10}
                                        onPress={() => setShowPassword((visible) => !visible)}
                                    >
                                        <MaterialIcons
                                            name={showPassword ? "visibility-off" : "visibility"}
                                            size={21}
                                            color={colors.muted}
                                        />
                                    </Pressable>
                                </View>

                                {notice ? (
                                    <Text accessibilityLiveRegion="polite" style={styles.notice}>
                                        {notice}
                                    </Text>
                                ) : null}

                                <Pressable
                                    accessibilityRole="button"
                                    style={({ pressed }) => [
                                        styles.loginButton,
                                        pressed && styles.loginButtonPressed,
                                    ]}
                                    onPress={handleLogin}
                                >
                                    <Text style={styles.loginButtonText}>Entrar na loja</Text>
                                    <MaterialIcons
                                        name="arrow-forward"
                                        size={20}
                                        color={colors.background}
                                    />
                                </Pressable>

                                <View style={styles.footer}>
                                    <Text style={styles.footerText}>Ainda não tem uma conta? </Text>
                                    <Pressable
                                        accessibilityRole="button"
                                        onPress={() =>
                                            setNotice("O cadastro ainda não está configurado.")
                                        }
                                    >
                                        <Text style={styles.footerLink}>Criar conta</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.demoNote}>
                            Acesso demonstrativo · use qualquer e-mail e senha
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const colors = {
    background: "#060511",
    panel: "rgba(28, 16, 51, 0.75)",
    input: "rgba(15, 10, 31, 0.85)",
    gold: "#E5C158",
    muted: "#A29BB8",
    text: "#F5F1FF",
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 40,
    },
    container: {
        width: "100%",
        maxWidth: 460,
        alignSelf: "center",
        paddingHorizontal: 24,
    },
    brand: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 42,
    },
    brandIcon: {
        width: 46,
        height: 46,
        borderRadius: 16,
        backgroundColor: colors.panel,
        borderWidth: 1,
        borderColor: "rgba(229, 193, 88, 0.35)",
        alignItems: "center",
        justifyContent: "center",
    },
    brandName: {
        color: colors.gold,
        fontSize: 19,
        fontWeight: "700",
        letterSpacing: 2,
    },
    brandSubtitle: {
        color: colors.muted,
        fontSize: 9,
        fontWeight: "600",
        letterSpacing: 2,
        marginTop: 2,
    },
    heading: {
        marginBottom: 26,
    },
    eyebrow: {
        color: colors.gold,
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 2,
        marginBottom: 12,
    },
    title: {
        color: colors.text,
        fontSize: 32,
        fontWeight: "700",
        letterSpacing: -0.8,
        lineHeight: 39,
    },
    subtitle: {
        color: colors.muted,
        fontSize: 14,
        lineHeight: 23,
        marginTop: 10,
    },
    formCard: {
        backgroundColor: colors.panel,
        borderWidth: 1,
        borderColor: "rgba(229, 193, 88, 0.22)",
        borderRadius: 22,
        padding: 22,
    },
    form: {
        gap: 12,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 1,
    },
    passwordLabelRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
    },
    textLink: {
        color: colors.gold,
        fontSize: 11,
        fontWeight: "600",
    },
    inputWrapper: {
        minHeight: 54,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: "rgba(229, 193, 88, 0.18)",
        borderRadius: 14,
        backgroundColor: colors.input,
    },
    input: {
        flex: 1,
        minWidth: 0,
        color: colors.text,
        fontSize: 14,
        paddingVertical: 14,
    },
    notice: {
        color: "#FF8D8D",
        fontSize: 12,
        lineHeight: 18,
        marginTop: 1,
    },
    loginButton: {
        minHeight: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        backgroundColor: colors.gold,
        borderRadius: 14,
        marginTop: 8,
    },
    loginButtonPressed: {
        backgroundColor: "#F0D88B",
    },
    loginButtonText: {
        color: colors.background,
        fontSize: 14,
        fontWeight: "700",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 18,
    },
    footerText: {
        color: colors.muted,
        fontSize: 12,
    },
    footerLink: {
        color: colors.gold,
        fontSize: 12,
        fontWeight: "700",
    },
    demoNote: {
        color: colors.muted,
        fontSize: 11,
        textAlign: "center",
        marginTop: 18,
    },
});