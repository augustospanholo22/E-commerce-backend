import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module.js';
import { LojasModule } from './lojas/lojas.module.js';
import { ProdutosModule } from './produtos/produtos.module.js';
import { PedidosModule } from './pedidos/pedidos.module.js';
import { ItensPedidoModule } from './itens-pedido/itens-pedido.module.js';
import { AuthModule } from './auth/auth.module.js';
import { ProfilesModule } from './profiles/profiles.module.js';

@Module({
  imports: [UsersModule, LojasModule, ProdutosModule, PedidosModule, ItensPedidoModule, AuthModule, ProfilesModule],
})
export class AppModule {}