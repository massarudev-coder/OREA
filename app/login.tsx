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

const emailCadastradoFMS = "teste@meteoros.com";
const senhaCadastradaFMS = "Meteoros123";

export default function LoginFMS() {
    const routerFMS = useRouter();
    const [emailFMS, setEmailFMS] = useState("");
    const [passwordFMS, setPasswordFMS] = useState("");
    const [showPasswordFMS, setShowPasswordFMS] = useState(false);
    const [noticeFMS, setNoticeFMS] = useState("");

    function verificarLoginFMS() {
        if (!emailFMS.trim() || !passwordFMS.trim()) {
            setNoticeFMS("Preencha seu e-mail e sua senha para continuar.");
            return;
        }

        if (emailFMS.trim().toLowerCase() !== emailCadastradoFMS) {
            setNoticeFMS("E-mail incorreto. Confira o endereço e tente novamente.");
            return;
        }

        if (passwordFMS !== senhaCadastradaFMS) {
            setNoticeFMS("Senha incorreta. Confira sua senha e tente novamente.");
            return;
        }

        routerFMS.replace("/(tabs)");
    }

    return (
        <SafeAreaView style={stylesFMS.safeArea}>
            <KeyboardAvoidingView
                style={stylesFMS.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={stylesFMS.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={stylesFMS.container}>
                        <View style={stylesFMS.brand}>
                            <View style={stylesFMS.brandIcon}>
                                <MaterialIcons name="auto-awesome" size={21} color={colorsFMS.gold} />
                            </View>
                            <View>
                                <Text style={stylesFMS.brandName}>OREA</Text>
                                <Text style={stylesFMS.brandSubtitle}>COSMIC VAULT</Text>
                            </View>
                        </View>

                        <View style={stylesFMS.heading}>
                            <Text style={stylesFMS.eyebrow}>ACESSO AO OBSERVATÓRIO</Text>
                            <Text style={stylesFMS.title}>Bem-vindo de volta</Text>
                            <Text style={stylesFMS.subtitle}>
                                Entre para explorar uma coleção verdadeiramente fora deste mundo.
                            </Text>
                        </View>

                        <View style={stylesFMS.formCard}>
                            <View style={stylesFMS.form}>
                                <Text style={stylesFMS.label}>E-mail</Text>
                                <View style={stylesFMS.inputWrapper}>
                                    <MaterialIcons
                                        name="mail-outline"
                                        size={21}
                                        color={colorsFMS.muted}
                                    />
                                    <TextInput
                                        accessibilityLabel="E-mail"
                                        style={stylesFMS.input}
                                        placeholder="voce@exemplo.com"
                                        placeholderTextColor={colorsFMS.muted}
                                        value={emailFMS}
                                        onChangeText={(valueFMS) => {
                                            setEmailFMS(valueFMS);
                                            setNoticeFMS("");
                                        }}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="emailAddress"
                                        returnKeyType="next"
                                    />
                                </View>

                                <View style={stylesFMS.passwordLabelRow}>
                                    <Text style={stylesFMS.label}>Senha</Text>
                                    <Pressable
                                        accessibilityRole="button"
                                        onPress={() =>
                                            setNoticeFMS("A recuperação de senha ainda não está configurada.")
                                        }
                                    >
                                        <Text style={stylesFMS.textLink}>Esqueceu a senha?</Text>
                                    </Pressable>
                                </View>
                                <View style={stylesFMS.inputWrapper}>
                                    <MaterialIcons
                                        name="lock-outline"
                                        size={21}
                                        color={colorsFMS.muted}
                                    />
                                    <TextInput
                                        accessibilityLabel="Senha"
                                        style={stylesFMS.input}
                                        placeholder="Digite sua senha"
                                        placeholderTextColor={colorsFMS.muted}
                                        value={passwordFMS}
                                        onChangeText={(valueFMS) => {
                                            setPasswordFMS(valueFMS);
                                            setNoticeFMS("");
                                        }}
                                        secureTextEntry={!showPasswordFMS}
                                        textContentType="password"
                                        returnKeyType="done"
                                        onSubmitEditing={verificarLoginFMS}
                                    />
                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel={showPasswordFMS ? "Ocultar senha" : "Mostrar senha"}
                                        hitSlop={10}
                                        onPress={() =>
                                            setShowPasswordFMS((visibleFMS) => !visibleFMS)
                                        }
                                    >
                                        <MaterialIcons
                                            name={showPasswordFMS ? "visibility-off" : "visibility"}
                                            size={21}
                                            color={colorsFMS.muted}
                                        />
                                    </Pressable>
                                </View>

                                {noticeFMS ? (
                                    <Text accessibilityLiveRegion="polite" style={stylesFMS.notice}>
                                        {noticeFMS}
                                    </Text>
                                ) : null}

                                <Pressable
                                    accessibilityRole="button"
                                    style={({ pressed: pressedFMS }) => [
                                        stylesFMS.loginButton,
                                        pressedFMS && stylesFMS.loginButtonPressed,
                                    ]}
                                    onPress={verificarLoginFMS}
                                >
                                    <Text style={stylesFMS.loginButtonText}>Entrar na loja</Text>
                                    <MaterialIcons
                                        name="arrow-forward"
                                        size={20}
                                        color={colorsFMS.background}
                                    />
                                </Pressable>

                                <View style={stylesFMS.footer}>
                                    <Text style={stylesFMS.footerText}>Ainda não tem uma conta? </Text>
                                    <Pressable
                                        accessibilityRole="button"
                                        onPress={() =>
                                            setNoticeFMS("O cadastro ainda não está configurado.")
                                        }
                                    >
                                        <Text style={stylesFMS.footerLink}>Criar conta</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <Text style={stylesFMS.demoNote}>
                            Acesso demonstrativo · use o e-mail e a senha cadastrados
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const colorsFMS = {
    background: "#060511",
    panel: "rgba(28, 16, 51, 0.75)",
    input: "rgba(15, 10, 31, 0.85)",
    gold: "#E5C158",
    muted: "#A29BB8",
    text: "#F5F1FF",
};

const stylesFMS = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colorsFMS.background,
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
        backgroundColor: colorsFMS.panel,
        borderWidth: 1,
        borderColor: "rgba(229, 193, 88, 0.35)",
        alignItems: "center",
        justifyContent: "center",
    },
    brandName: {
        color: colorsFMS.gold,
        fontSize: 19,
        fontWeight: "700",
        letterSpacing: 2,
    },
    brandSubtitle: {
        color: colorsFMS.muted,
        fontSize: 9,
        fontWeight: "600",
        letterSpacing: 2,
        marginTop: 2,
    },
    heading: {
        marginBottom: 26,
    },
    eyebrow: {
        color: colorsFMS.gold,
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 2,
        marginBottom: 12,
    },
    title: {
        color: colorsFMS.text,
        fontSize: 32,
        fontWeight: "700",
        letterSpacing: -0.8,
        lineHeight: 39,
    },
    subtitle: {
        color: colorsFMS.muted,
        fontSize: 14,
        lineHeight: 23,
        marginTop: 10,
    },
    formCard: {
        backgroundColor: colorsFMS.panel,
        borderWidth: 1,
        borderColor: "rgba(229, 193, 88, 0.22)",
        borderRadius: 22,
        padding: 22,
    },
    form: {
        gap: 12,
    },
    label: {
        color: colorsFMS.text,
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
        color: colorsFMS.gold,
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
        backgroundColor: colorsFMS.input,
    },
    input: {
        flex: 1,
        minWidth: 0,
        color: colorsFMS.text,
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
        backgroundColor: colorsFMS.gold,
        borderRadius: 14,
        marginTop: 8,
    },
    loginButtonPressed: {
        backgroundColor: "#F0D88B",
    },
    loginButtonText: {
        color: colorsFMS.background,
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
        color: colorsFMS.muted,
        fontSize: 12,
    },
    footerLink: {
        color: colorsFMS.gold,
        fontSize: 12,
        fontWeight: "700",
    },
    demoNote: {
        color: colorsFMS.muted,
        fontSize: 11,
        textAlign: "center",
        marginTop: 18,
    },
});