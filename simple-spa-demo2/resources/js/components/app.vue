<template>
    <div id="app">

        <!-- ナビゲーション -->
        <v-navigation-drawer absolute class="hidden-sm-and-up" v-model="sideNav">
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            {{ appTitle }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link" >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-badge color="red" v-if="item.badge">
                        <span slot="badge">{{ item.badge }}</span>
                        <span>{{ item.title }}</span>
                    </v-badge>
                    <v-list-tile-content v-else>{{ item.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <!-- ツールバー -->
        <v-toolbar color="primary" dark fixed app>
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link" ><span>{{ item.title }}</span></v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <!-- コンテンツ -->
        <v-content>
            <router-view></router-view>
        </v-content>

    </div>
</template>

<script>
    export default {
        name: "App",
        data: function() {
            return {
                sideNav: false,
                appTitle: "TITLE",
                menuItems: [
                    {title: "Link One", link: "/", icon: 'person' },
                    {title: "Link Two", link: "/tow", icon: 'person' },
                    {title: "Link Three", link: "/three", icon: 'person' },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
