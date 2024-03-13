import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as cors from 'cors';
import { MaterialTagsModule } from './material-tags/material-tags.module';
import { CommentsModule } from './comments/comments.module';
import { RatingModule } from './rating/rating.module';
import { MaterialModule } from './material/material.module';
import { TagsModule } from './tags/tags.module';
import { UserModule } from './user/user.module';
import { NoMaterialModule } from './no-material/no-material.module';

@Module({
  imports: [
    UserModule,
    TagsModule,
    MaterialModule,
    RatingModule,
    CommentsModule,
    MaterialTagsModule,
    JwtModule.register({
      secret: 'LBH',
      // signOptions: { expiresIn: '1h' }, // Configuração opcional para definir o tempo de expiração do token
    }),
    NoMaterialModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
